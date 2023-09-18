import axios from 'axios';

const getData = async () => {
  const { data } = await axios.get(`${process.env.URL}/api`);
  console.log(data);
};

export default async function Home() {
  await getData();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
  );
}
