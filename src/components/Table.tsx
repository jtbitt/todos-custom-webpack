import {
  Table as MUITable,
  TableBody as MUITableBody,
  TableCell as MUITableCell,
  TableContainer as MUITableContainer,
  TableHead as MUITableHead,
  TableRow as MUITableRow,
  TableFooter as MUITableFooter,
  TablePagination as MUITablePagination,
  TableProps,
  TableBodyProps,
  TableCellProps,
  TableContainerProps,
  TableHeadProps,
  TableRowProps,
  TableFooterProps,
  TablePaginationProps,
} from '@mui/material';

export const Table = (props: TableProps) => <MUITable {...props} />;

export const TableBody = (props: TableBodyProps) => <MUITableBody {...props} />;

export const TableCell = (props: TableCellProps) => <MUITableCell {...props} />;

export const TableContainer = (props: TableContainerProps) => (
  <MUITableContainer {...props} />
);

export const TableHead = (props: TableHeadProps) => <MUITableHead {...props} />;

export const TableRow = (props: TableRowProps) => <MUITableRow {...props} />;

export const TableFooter = (props: TableFooterProps) => (
  <MUITableFooter {...props} />
);

export const TablePagination = (props: TablePaginationProps) => (
  <MUITablePagination {...props} />
);
