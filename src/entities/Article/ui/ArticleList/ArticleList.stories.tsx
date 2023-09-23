import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType, ArticleType, ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  title: 'entities/ArticleList',
  component: ArticleList,
  args: {
    articles: [{
      id: '1',
      title: 'Article title 1',
      subtitle: 'Article subtitle 1',
      img: 'https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg',
      views: 1745,
      user: {
        id: '1',
        username: 'username',
      },
      createdAt: '11.04.2022',
      type: [
        ArticleType.OTHER,
      ],
      blocks: [
        {
          id: '1',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'test1 test2 test3 test4',
            'test1 test2 test3 test4 test5',
            'test1 test2 test3 test4 test5 test6',
          ],
        },
        {
          id: '4',
          type: ArticleBlockType.CODE,
          code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
          id: '5',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'test1 test2 test3 test4',
            'test1 test2 test3 test4 test5 test6758',
          ],
        },
        {
          id: '2',
          type: ArticleBlockType.IMAGE,
          src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
          title: 'Image 1 - screenshot',
        },
        {
          id: '3',
          type: ArticleBlockType.CODE,
          code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
          id: '7',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'test1 test2 test3 test4',
            'test1 test2 test3 test4 test45',
            'test1 test2 test3 test4 test4 test4asd test4133 test4123',
          ],
        },
        {
          id: '8',
          type: ArticleBlockType.IMAGE,
          src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
          title: 'Image 1 - screenshot',
        },
        {
          id: '9',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'test1 test2',
          ],
        },
        {
          id: '10',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'test1 test2 test3 test4',
            'test1 test2 test3 test4 test5 test67583',
            'test1 test2 test3 test4 test5 test67584',
            'test1 test2 test3 test4 test5 test67585',
            'test1 test2 test3 test4 test5 test67586',
            'test1 test2 test3 test4 test5 test67587',
          ],
        },
        {
          id: '11',
          type: ArticleBlockType.IMAGE,
          src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
          title: 'Image 1 - screenshot',
        },
        {
          id: '12',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'test1 test2 test3 test4',
            'test1 test2 test3 test4 test5 test6758',
            'test1 test2 test3 test4 test6758',
            'test1 test2 test3 test5 test6758',
            'test1 test2 test4 test5 test6758',
            'test1 test3 test4 test5 test6758',
            'test1 test2 test5 test6758',
            'test1  test5 test6758',
            'test1 test2 test3 test6758',
            'test1 test2 test3',
            'test1',
          ],
        },
        {
          id: '13',
          type: ArticleBlockType.IMAGE,
          src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
          title: 'Image 1 - screenshot',
        },
        {
          id: '14',
          type: ArticleBlockType.CODE,
          code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
      ],
    }],
  },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Tile: Story = {
  args: {
    view: ArticleView.TILE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ListItem: Story = {
  args: {
    view: ArticleView.LIST_ITEM,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
