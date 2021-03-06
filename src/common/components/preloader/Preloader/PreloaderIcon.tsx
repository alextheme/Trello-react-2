import React, { SVGProps } from 'react';

const PreloaderIcon = ({ ...props }: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="64px"
    height="64px"
    viewBox="0 0 128 128"
    xmlSpace="preserve"
    {...props}
  >
    <script type="text/ecmascript" />
    <rect x="0" y="0" width="100%" height="100%" />
    <g>
      <circle cx="16" cy="64" r="16" />
      <circle cx="16" cy="64" r="14.344" transform="rotate(45 64 64)" />
      <circle cx="16" cy="64" r="12.531" transform="rotate(90 64 64)" />
      <circle cx="16" cy="64" r="10.75" transform="rotate(135 64 64)" />
      <circle cx="16" cy="64" r="10.063" transform="rotate(180 64 64)" />
      <circle cx="16" cy="64" r="8.063" transform="rotate(225 64 64)" />
      <circle cx="16" cy="64" r="6.438" transform="rotate(270 64 64)" />
      <circle cx="16" cy="64" r="5.375" transform="rotate(315 64 64)" />
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
        calcMode="discrete"
        dur="720ms"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export default PreloaderIcon;
