const NavItem = ({ label, active }) => {
    return (
        <li className={active ? 'text-white selected' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
      {label}
    </li>
    );
};

export default NavItem;