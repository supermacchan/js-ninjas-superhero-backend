jest.mock('../services/heroService', () => {
    return {
      getHeroes: jest.fn(),
    };
  });

const { getHeroes } = require('../services/heroService');
const { ServerError } = require('../helpers/errors');

describe('getHeroes', () => {
  it('should return an array of heroes', async () => {
    const mockResult = {
      code: 200,
      status: "success",
      page: 1,
      data: [
              {   
                _id: '640cd5ac2d9fecf12e889807',
                nickname: 'Hero1',
                real_name: 'Name1',
                origin_description: 'Story1',
                superpowers: 'Powers1',
                catch_phrase: 'Phrase1',
                images: [
                    'https://i.ibb.co/cv69kf6/batman-1.jpg'
                ]
              }
            ]
    };
    
    getHeroes.mockResolvedValue(mockResult);

    const result = await getHeroes(0, 5);

    expect(result).toEqual(mockResult);
  });

  it('should throw a ServerError when there is an exception', async () => {

    getHeroes.mockRejectedValue(new ServerError('The server could not complete your query.'));

    let error;
    try {
      await getHeroes(0, 10);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(ServerError);
    expect(error.message).toEqual('The server could not complete your query.');
  });
});