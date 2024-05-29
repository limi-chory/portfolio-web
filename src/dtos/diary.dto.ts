import { ApiProperty } from '@nestjs/swagger';
import { Diaries } from 'src/entities/diaries.entity';
import { PageInfo } from './common.dto';

export class CreateDiaryDto {
  @ApiProperty({ description: '제목' })
  title: string;

  @ApiProperty({ description: '내용' })
  contents: string;
}

export class UpdateDiaryDto {
  @ApiProperty({ description: '변경할 제목' })
  title?: string;

  @ApiProperty({ description: '변경할 내용' })
  contents?: string;
}

export class GetDiariesResponse {
  @ApiProperty({ type: () => Diaries, isArray: true })
  data: Diaries[];

  @ApiProperty()
  pageInfo: PageInfo;
}
