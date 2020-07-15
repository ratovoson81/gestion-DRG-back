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
    return this.personneRepository.save(personne);
  }

  async getAllPersonne(): Promise<Personne[]> {
    return this.personneRepository.find({
      relations: ['consultations'],
    });
  }
}
