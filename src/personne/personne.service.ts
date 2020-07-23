import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Personne } from './personne.entity';
import { Repository } from 'typeorm';
import { InputPersonne } from './personne.input';

@Injectable()
export class PersonneService {
  constructor(
    @InjectRepository(Personne)
    private personneRepository: Repository<Personne>,
  ) {}

  async createPersonne(newPersonneData: InputPersonne): Promise<Personne> {
    const personne = new Personne();
    Object.assign(personne, newPersonneData);
    personne.consultations = [];
    return this.personneRepository.save(personne);
  }

  async getAllPersonne(): Promise<Personne[]> {
    return this.personneRepository.find({
      relations: ['consultations'],
    });
  }

  async updatePersonne(personneData: InputPersonne): Promise<Personne> {
    const personne = await this.personneRepository.findOne({
      where: { idPersonne: personneData.idPersonne },
      relations: ['consultations'],
    });
    const { idPersonne, ...rest } = personneData;
    Object.assign(personne, rest);
    return this.personneRepository.save(personne);
  }

  async getPersonneById(id: string): Promise<Personne> {
    return await this.personneRepository.findOne({
      where: { idPersonne: id },
    });
  }
}
