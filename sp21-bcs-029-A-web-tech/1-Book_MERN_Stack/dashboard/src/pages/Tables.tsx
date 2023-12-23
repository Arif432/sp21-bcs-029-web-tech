import Breadcrumb from '../components/Breadcrumb';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Products" />
      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </>
  );
};

export default Tables;
