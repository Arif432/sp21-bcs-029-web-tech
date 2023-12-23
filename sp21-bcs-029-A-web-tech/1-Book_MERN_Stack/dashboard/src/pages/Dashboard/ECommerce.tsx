import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import TableTwo from '../../components/TableTwo.tsx';

const ECommerce = () => {
  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardTwo />
        <CardThree />
      </div>

      <TableTwo />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartThree />
      </div>
    </>
  );
};

export default ECommerce;
