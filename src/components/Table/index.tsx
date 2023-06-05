import { TableRaw, Head, Row, Header, Data, Body } from './styled';

const Table = ({ children, ...props }: any) => {
  return <TableRaw {...props}>{children}</TableRaw>;
};

Table.Head = Head;
Table.Row = Row;
Table.Header = Header;
Table.Data = Data;
Table.Body = Body;

export default Table;
