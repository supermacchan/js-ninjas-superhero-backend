jest.mock('../services/heroService', () => {
    return {
        deleteHero: jest.fn(),
    };
  });

const { deleteHero } = require('../services/heroService');
const { NotFoundError } = require('../helpers/errors');

describe('deleteHero', () => {
  it('should update the info about the hero by his id and return the updated info', async () => {
    const mockResult = {   
        code: 200,
        status: "success - item deleted"
    };

    deleteHero.mockResolvedValue(mockResult);

    const result = await deleteHero('640cd5ac2d9fecf12e889807');

    expect(result).toEqual(mockResult);
  });

  it('should throw a NotFoundError when the data is incorrect', async () => {

    deleteHero.mockRejectedValue(new NotFoundError('Not found'));

    let error;
    try {
      await deleteHero('640cd5ac2d9fecf12e889807');
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(NotFoundError);
    expect(error.message).toEqual('Not found');
  });
});