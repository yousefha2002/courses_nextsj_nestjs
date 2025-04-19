import React from 'react'

interface CardGridProps<T> {
    data: T[]
    renderItem: (item: T) => React.ReactNode
}

export default function CardGrid<T>({ data, renderItem }: CardGridProps<T>) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
        ))}
        </div>
    )
}
