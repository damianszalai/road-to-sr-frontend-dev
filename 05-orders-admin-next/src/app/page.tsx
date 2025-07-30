// 05-orders-admin-next/src/app/page.tsx
'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrders } from '@/hooks/useOrders';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { OrderStatus, Order } from '@/types/orders';
import { useUpdateOrder } from '@/hooks/useUpdateOrder';

const statusColor = {
  pending: 'bg-yellow-200 text-yellow-800 capitalize',
  paid: 'bg-green-200 text-green-800 capitalize',
  shipped: 'bg-blue-200 text-blue-800 capitalize',
  cancelled: 'bg-red-200 text-red-800 capitalize',
};

const STATUS_VALUES: OrderStatus[] = [
  'pending',
  'paid',
  'shipped',
  'cancelled',
];

function OrdersPage() {
  const { data, isPending } = useOrders();
  const { mutate: updateOrder } = useUpdateOrder();
  const [sorting, setSorting] = useState<SortingState>([]);

  const handleStatusChange = (id: string, newStatus: OrderStatus) => {
    updateOrder({ id, status: newStatus });
  };

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: 'customer_name',
      header: 'Cliente',
    },
    {
      accessorKey: 'total',
      header: 'Total',
      cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
    },
    {
      accessorKey: 'status',
      header: 'Estado',
      cell: ({ row }) => {
        const order = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger className="pointer cursor-pointer">
              <Badge className={statusColor[order.status]}>
                {order.status}
              </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {STATUS_VALUES.map((status) => {
                if (status === order.status) {
                  return null;
                }
                return (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => handleStatusChange(order.id, status)}
                    className="capitalize"
                  >
                    {status}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      accessorKey: 'created_at',
      header: 'Fecha',
      cell: ({ getValue }) => new Date(getValue<string>()).toLocaleString(),
    },
  ];

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <main className="min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Order Listing
        </h1>
      </header>

      {isPending ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Card key={idx} className="p-4 space-y-4">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer select-none"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </main>
  );
}

export default OrdersPage;
