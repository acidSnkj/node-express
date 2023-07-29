const museumCount = async (req, res) => {
  console.log('reqs', req.body.payload);
  const payload = req.params.payload || req.body.payload;
  await serializerMsg(payload)
    .then((response) => {
      console.log('response', response);
      return res.status(200).send();
    })
    .catch((err) => {
      console.log('err', err);
      return res.status(500).send();
    });
};

export const serializerMsg = (payload) =>
  new Promise((resolve, reject) => {
    try {
      let msg = '';
      const letters = payload.toUpperCase().split('');
      const lettersObj = [];
      if (!letters.includes('M', 'W', 'C')) {
        reject('There is no valid letter');
      }
      let womenCount = 0;
      let menCount = 0;
      let childrenCount = 0;
      letters.forEach((letter) => {
        if (letter === 'W') {
          womenCount++;
        } else if (letter === 'M') {
          menCount++;
        } else if (letter === 'C') {
          childrenCount++;
        }
      });
      lettersObj.push(
        {
          label: 'W',
          count: womenCount,
        },
        {
          label: 'M',
          count: menCount,
        },
        {
          label: 'C',
          count: childrenCount,
        },
      );
      lettersObj.sort((a, b) => {
        return b.count - a.count;
      });
      if (womenCount === menCount && womenCount === childrenCount) {
        msg = `${menCount}M${womenCount}W${childrenCount}C`;
      } else {
        lettersObj.forEach(({ label, count }) => {
          if (count > 0) msg += `${count}${label}`;
        });
      }
      resolve(msg);
    } catch {
      reject('Error');
    }
  });
export default museumCount;
