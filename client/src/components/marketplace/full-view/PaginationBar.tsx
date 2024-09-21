import Pagination from "@mui/material/Pagination";

const PaginationBar = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
};

export default PaginationBar;
