import React from "react";
import ContentLoader from "react-content-loader";

export default function SearchCardLoading(props) {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-yellow-tint shadow-btn rounded-md border-2 px-3 py-4 flex-shrink-0 ">
      <ContentLoader
        speed={2}
        width={284}
        height={200}
        viewBox="0 0 284 200"
        backgroundColor="#e1d8c6"
        foregroundColor="#f2ede3"
        {...props}
      >
        <path d="M 4 10 a 6 6 0 16 -6 h 268 a 6 6 0 16 6 v 184 a 6 6 0 1 -6 6 H 10 a 6 6 0 1 -6 -6 V 10 z" />
        <path d="M 3 8 a 5 5 0 15 -5 h 268 a 5 5 0 15 5 v 184 a 5 5 0 1 -5 5 H 8 a 5 5 0 1 -5 -5 V 8 z" />
        <path d="M 3 8 a 5 5 0 15 -5 h 268 a 5 5 0 15 5 v 184 a 5 5 0 1 -5 5 H 8 a 5 5 0 1 -5 -5 V 8 z" />
        <path d="M 14.5 18.5 h 255 v 25 h -255 z" />
        <path d="M 14 52 h 256 v 19 H 14 z" />
        <rect x="16" y="54" rx="6" ry="6" width="12" height="12" />
        <path d="M 14 79 h 256 v 19 H 14 z" />
        <rect x="18" y="81" rx="4" ry="4" width="8" height="12" />
        <path d="M 14 110 h 133 v 18 H 14 z" />
        <rect x="16" y="112" rx="5" ry="5" width="9" height="9" />
        <path d="M 14.5 137.5 v -1 h 255 v 1 z" />
        <path d="M 14 156 h 51 v 16 H 14 z" />
        <rect x="16" y="159" rx="5" ry="5" width="12" height="9" />
        <path d="M 138 146 h 36 v 36 h -36 z" />
        <circle cx="156" cy="164" r="17" />
        <path d="M 162 146 h 36 v 36 h -36 z" />
        <circle cx="180" cy="164" r="17" />
        <path d="M 186 146 h 36 v 36 h -36 z" />
        <circle cx="204" cy="164" r="17" />
        <path d="M 210 146 h 36 v 36 h -36 z" />
        <circle cx="228" cy="164" r="17" />
        <path d="M 234 146 h 36 v 36 h -36 z" />
        <circle cx="252" cy="164" r="18" />
        <rect x="247" y="155" rx="4" ry="4" width="8" height="11" />
      </ContentLoader>
    </div>
  );
}
