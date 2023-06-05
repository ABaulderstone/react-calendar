import tw from 'twin.macro';

const TableRaw = tw.table`text-left border border-gray-700 border-collapse rounded w-full`;

const Head = tw.thead`font-bold`;

const Row = tw.tr``;

const Header = tw.th`border border-gray-700 p-3`;

const Data = tw.td`border border-gray-700 p-3`;

const Body = tw.tbody``;

export { TableRaw, Head, Row, Header, Data, Body };
