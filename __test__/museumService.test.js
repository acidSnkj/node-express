import { serializerMsg } from '../src/services/museumService';

test('Test OK', async () => {
  const payload = 'MWMCC';
  await serializerMsg(payload).then((response) => {
    console.log('response', response);
    expect(response).toBe('2M2C1W');
  });
});

test('Test fail', async () => {
  const payload = '1234';
  await serializerMsg(payload)
    .then(() => {
      throw new Error('Should not resolve');
    })
    .catch((err) => {
      console.log('err', err);
      expect(err).toBe('There is no valid letter');
    });
});
