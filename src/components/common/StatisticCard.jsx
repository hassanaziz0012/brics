import React from "react";

export default function StatisticCard({ value, label }) {
    return (
        <div className="p-5 bg-gradient-to-b from-accent-50 to-accent-400 rounded h-full flex flex-col items-center justify-center">
            <p className="text-4xl font-header mb-6 text-center">{value}</p>
            <p className="text-center">{label}</p>
        </div>
    );
}
