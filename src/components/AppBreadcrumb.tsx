'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from './ui/breadcrumb';

type ObjI = {
    title: string;
    company_url: string;
};

export default function AppBreadcrumb({ obj }: { obj: ObjI }) {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    const breadcrumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        const isLast = index === segments.length - 1;

        // Default label from URL
        let label = segment
            .replace(
                /^([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|^\d+)-?/i,
                ''
            )
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase())
            .trim();

        // ✅ Override LAST breadcrumb with job title
        if (isLast && obj?.title) {
            label = obj.title;
        }

        return {
            href,
            label,
            isLast,
        };
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                    <BreadcrumbItem key={item.href}>
                        {index > 0 && <span className="mx-1">{'>'}</span>}

                        {item.isLast ? (
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink asChild className="text-primary-color font-normal">
                                <Link href={item.href}>{item.label}</Link>
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
