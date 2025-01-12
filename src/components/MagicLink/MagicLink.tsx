import { MouseEvent } from "react";
import Button from "../UI/Button";
import { CopySvg } from "../UI/Icons/IconsSvg";

interface Props {
  magicLink: string;
}
export default function MagicLink({ magicLink }: Props) {
  async function onCopyMagicLink(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(magicLink);
  }
  return (
    <div className="w-full flex border p-4 rounded ">
      <Button
        styleMode="secondary"
        styleSize="small"
        onClick={onCopyMagicLink}
        className="w-full flex ap-2 "
      >
        <CopySvg className="w-6 aspect-square" />
        <p className=" truncate">Link</p>
      </Button>
    </div>
  );
}
