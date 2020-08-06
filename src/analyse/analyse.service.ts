import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Analyse } from './analyse.entity';
import { Repository } from 'typeorm';
import { InputAnalyse } from './analyse.input';

@Injectable()
export class AnalyseService {
  constructor(
    @InjectRepository(Analyse)
    private analyseRepository: Repository<Analyse>,
  ) {}

  async create(data: InputAnalyse[]): Promise<Analyse[]> {
    let analyse: Analyse[] = [];
    analyse = await this.analyseRepository.save(data);
    return analyse;
  }

  async update(data: InputAnalyse[]): Promise<Analyse[]> {
    const analyseData: Analyse[] = await Promise.all(
      data.map(
        async (a: Analyse): Promise<Analyse> => {
          const analyse = await this.analyseRepository.findOne({
            where: { idAnalyse: a.idAnalyse },
          });
          const { idAnalyse, ...rest } = a;
          Object.assign(analyse, rest);

          return await this.analyseRepository.save(analyse);
        },
      ),
    );
    // possible ajout si a.idPersonne = undifined, faire ajout
    return analyseData;
  }
}
