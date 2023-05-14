import Image from "next/image";
import { FunctionComponent } from "react";
import { AvatarProps } from "../utils/props";
import { styles } from "../utils/styles";

export const Avatar: FunctionComponent<AvatarProps> = ({ source, alt, size = "md" }) => {
  return <Image src={source} alt={alt} height={100} width={100} className={styles.avatar(size)} />;
};
