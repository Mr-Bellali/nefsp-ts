import Pagination from "@mui/material/Pagination";

interface PaginationBarProps {
  maxpages: number;
}

const PaginationBar: React.FC<PaginationBarProps> = ({ maxpages }) => {
  return (
    <div className="flex w-full justify-center items-center mb-10">
      <Pagination count={maxpages} variant="outlined" shape="rounded" />
    </div>
  );
};

export default PaginationBar;
