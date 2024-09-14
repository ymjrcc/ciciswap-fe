'use client'
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import Link from 'next/link';
import EmptyState from "@/components/EmptyState";

const rows = [
  {
    key: "0",
    token: "ETH",
    fee: "0.3%",
    range: "0.1 - 100",
    price: "1000",
    liquidity: "1000"
  },
  {
    key: "1",
    token: "USDT",
    fee: "0.3%",
    range: "0.1 - 100",
    price: "1000",
    liquidity: "1000"
  },
  {
    key: "2",
    token: "DAI",
    fee: "0.3%",
    range: "0.1 - 100",
    price: "1000",
    liquidity: "1000"
  },
  {
    key: "3",
    token: "USDC",
    fee: "0.3%",
    range: "0.1 - 100",
    price: "1000",
    liquidity: "1000"
  }
];

const columns = [
  {
    key: "token",
    label: "TOKEN",
  },
  {
    key: "fee",
    label: "FEE TIER",
  },
  {
    key: "range",
    label: "PRICE RANGE",
  },
  {
    key: "price",
    label: "CURRENT PRICE",
  },
  {
    key: "liquidity",
    label: "LIQUIDITY",
  }
];

const Page = () => {
  return (
    <div className='pt-12 w-4/5 m-auto'>
      <div className='flex justify-between items-end mb-4'>
        <div className='text-2xl'>Pool List</div>
        <Button className='border-gray-500 bg-amber-300 rounded-full' variant="bordered">
          <Link href='/positions'>My Positions</Link>
        </Button>
      </div>
      <Table isStriped className="border-2 border-gray-500 rounded-2xl">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key} className="bg-amber-100">{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows} emptyContent={<EmptyState />}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Page