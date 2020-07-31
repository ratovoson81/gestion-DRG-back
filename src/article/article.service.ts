import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';
import { InputArticle } from './article.input';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async create(data: InputArticle[]): Promise<Article[]> {
    let article: Article[] = [];
    article = await this.articleRepository.save(data);
    return article;
  }
}
