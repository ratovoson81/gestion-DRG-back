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

  async update(data: InputArticle[]): Promise<Article[]> {
    console.log(data);
    const articleData: Article[] = await Promise.all(
      data.map(
        async (a: Article): Promise<Article> => {
          const article = await this.articleRepository.findOne({
            where: { idArticle: a.idArticle },
          });
          const { idArticle, ...rest } = a;
          Object.assign(article, rest);

          return await this.articleRepository.save(article);
        },
      ),
    );
    // possible ajout si a.idPersonne = undifined, faire ajout
    return articleData;
  }
}
