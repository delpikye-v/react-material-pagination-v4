import React from "react";
export declare const minSection = 3;
interface IPaginationProps {
    className?: string;
    totalCount: number;
    limit?: number;
    currentPage: number;
    sectionNumber?: number;
    type?: "default" | "pager";
    labelFirst?: string;
    labelLast?: string;
    labelBack?: string;
    labelForward?: string;
    showFirstLast?: boolean;
    hideFirstLastIfActive?: boolean;
    setCurrentPage: (number: any) => any;
}
declare const Pagination: React.FC<IPaginationProps>;
export default Pagination;
