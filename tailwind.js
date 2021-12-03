import { create } from "tailwind-rn";
import styles from "./styles.json";

export const { tailwind: tw, getColor: gc } = create(styles);
