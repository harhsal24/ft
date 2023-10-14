import type { NextPage } from "next";

const Clock: NextPage = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={24}
    fill="none"

  >
    <path
      fill="#0C0C0D"
      d="M13.891 2c-6.05 0-10.97 4.486-10.97 10s4.92 10 10.97 10c6.05 0 10.97-4.486 10.97-10s-4.92-10-10.97-10Zm0 18c-4.839 0-8.776-3.589-8.776-8s3.937-8 8.776-8c4.84 0 8.777 3.589 8.777 8s-3.938 8-8.777 8Z"
    />
    <path fill="#BF6157" d="M14.988 7h-2.194v6h6.582v-2h-4.388V7Z" />
  </svg>
  )
}

export default Clock