jest.mock('../services/heroService', () => {
    return {
        addHero: jest.fn(),
    };
  });

const { addHero } = require('../services/heroService');
const { ValidationError } = require('../helpers/errors');

describe('addHero', () => {
  it('should create a new hero and return his info', async () => {
    const mockResult = {
      code: 201,
      status: "created",
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

    addHero.mockResolvedValue(mockResult);

    const result = await addHero({   
        nickname: 'Hero1',
        real_name: 'Name1',
        origin_description: 'Story1',
        superpowers: 'Powers1',
        catch_phrase: 'Phrase1',
    });

    expect(result).toEqual(mockResult);
  });

  it('should throw a ValidationError when the data is incorrect', async () => {

    addHero.mockRejectedValue(new ValidationError('Bad request: some required fields are not filled out.'));

    let error;
    try {
      await addHero({   
        nickname: 'Hero1',
        real_name: 'Name1',
        origin_description: 'Story1',
        superpowers: 'Powers1',
        catch_phrase: 'Phrase1',
    });
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(ValidationError);
    expect(error.message).toEqual('Bad request: some required fields are not filled out.');
  });
});