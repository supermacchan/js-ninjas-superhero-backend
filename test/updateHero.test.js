jest.mock('../services/heroService', () => {
    return {
        updateHero: jest.fn(),
    };
  });

const { updateHero } = require('../services/heroService');
const { NotFoundError } = require('../helpers/errors');

describe('updateHero', () => {
  it('should update the info about the hero by his id and return the updated info', async () => {
    const mockResult = {
      code: 200,
      status: "success",
      data: {
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
    };

    updateHero.mockResolvedValue(mockResult);

    const result = await updateHero('640cd5ac2d9fecf12e889807', {   
        nickname: 'Hero1',
        real_name: 'Name1',
        origin_description: 'Story1',
        superpowers: 'Powers1',
        catch_phrase: 'Phrase1',
    });

    expect(result).toEqual(mockResult);
  });

  it('should throw a NotFoundError when the data is incorrect', async () => {

    updateHero.mockRejectedValue(new NotFoundError('Not found'));

    let error;
    try {
      await updateHero('640cd5ac2d9fecf12e889807', {   
        nickname: 'Hero1',
        real_name: 'Name1',
        origin_description: 'Story1',
        superpowers: 'Powers1',
        catch_phrase: 'Phrase1',
    });
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(NotFoundError);
    expect(error.message).toEqual('Not found');
  });
});