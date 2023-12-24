import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const ClipBoard: React.FC<{ text: string}> = ({
  text,
}) => {
  const handleCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return <div onClick={handleCopy} className="cursor-pointer flex items-center"><ContentCopyIcon /></div>;
};

export default ClipBoard;
