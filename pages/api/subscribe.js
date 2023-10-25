import { table } from '../../utils/Airtable';  // Updated path

export default async (req, res) => {
  const { email } = req.body;
  try {
    const createdRecords = await table.create([{ fields: { Email: email } }]);
    const createdRecord = createdRecords[0];
    res.status(200).json(createdRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Something went wrong!' });
  }
};
