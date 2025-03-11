import { MainLayoutConstantInterface } from "@constants/mainLayoutConstants";
import MainLayoutConstants from "../constants/mainLayoutConstants";

/**
 * Custom hook to generate a menu list with enhanced icon elements.
 * It maps over the `MainLayoutConstants` array, keeping all properties
 * and replacing the `icon` property with a JSX `<img>` element.
 *
 * @returns {Array} An array of objects containing menu items with a JSX icon component.
 *
 * @example
 * const menuItems = useMainLayoutMenu();
 * menuItems.forEach(item => console.log(item.label, item.icon));
 *
 * @remarks
 * - The `alt` attribute for the `<img>` is derived from the file name for accessibility.
 * - The icon dimensions are fixed at 32x32 pixels.
 */

function useMainLayoutMenu() {
  return MainLayoutConstants.map((item: MainLayoutConstantInterface) => ({
    ...item,
    icon: (
      <img
        src={item.icon}
        alt={item.icon.split("/").pop()?.replace(".svg", "")}
        height={32}
        width={32}
      />
    ),
  }));
}

export default useMainLayoutMenu;
