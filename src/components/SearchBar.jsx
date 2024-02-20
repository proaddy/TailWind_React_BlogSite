import React from "react";

export default function SearchBar() {
    return (
        <>
            <div className="flex place-content-between">
                <div className="flex gap-2 h-10 items-center text-gray-300">
                    <a className="text-black" href="#">Engineering </a> /
                    <a className="text-black" href="#">product </a> /
                    <a className="text-black" href="#">security </a> /
                    <a className="text-black" href="#">open source </a> /
                    <a className="text-black" href="#">enterprise policy</a> /
                    <a className="text-black" href="#">education community </a> /
                    <a className="text-black" href="#">company</a> /
                </div>
                <div className="flex items-center gap-2">
                    <span>search</span> 
                    <img className="h-5" src="/icons8-search-50.png" alt="search icon" />
                </div>
            </div>
            <hr className='h-1 bg-gray-300 rounded-md'/>
        </>
    );
}
