import React, { Component } from "react";
import Head from "next/head";

interface MobileNavBarProps {
  someProp: string;
}

interface MobileNavBarState {
  isListVisible: boolean;
}

class MobileNavBar extends Component<MobileNavBarProps, MobileNavBarState> {
  private menuRef = React.createRef<HTMLDivElement>();

  constructor(props: MobileNavBarProps) {
    super(props);
    this.state = {
      isListVisible: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: MouseEvent) => {
    if (this.menuRef.current && !this.menuRef.current.contains(event.target as Node)) {
      this.setState({ isListVisible: false });
    }
  };

  toggleListVisibility = () => {
    this.setState((prevState) => ({
      isListVisible: !prevState.isListVisible,
    }));
  };

  render() {
    const { someProp } = this.props;
    const { isListVisible } = this.state;

    return (
      <nav
        style={{ backgroundColor: 'rgba(150, 80, 20, 0.75)', padding: '1rem', zIndex: 2, position: 'relative' }}
        className="flex justify-between items-center"
      >
        <a className="text-3xl font-bold text-white hover:underline" href="https://aadarshsingh0.github.io/">
          Aadarsh Singh
        </a>

        <div className="relative menu-container" ref={this.menuRef}>
          <button
          className="text-white px-4 py-2 rounded-full focus:outline-none focus:ring-0 focus:border-black-800 bg-[#785028] hover:bg-[#704D29]"
          onClick={this.toggleListVisibility}
          >
            Menu
          </button>

          {/* Conditional rendering of the menu */}
          {isListVisible && (
          <div className="absolute right-0 top-full bg-black-800 rounded-md shadow-lg border border-white">
          <ul className="py-2" style={{ backgroundColor: '#785028', padding: '0.5rem' }}>
            <li className="hover:bg-yellow-600 py-2 px-6 border-b border-white">
              <a href="#" className="text-white block w-full">
                Theoretical Physics
              </a>
            </li>
            <li className="hover:bg-yellow-600 py-2 px-6 border-b border-white">
              <a href="/ML" className="text-white block w-full">
                Coding
              </a>
            </li>
            <li className="hover:bg-yellow-600 py-2 px-6">
              <a href="/" className="text-white block w-full">
                Animation
              </a>
            </li>
          </ul>
        </div>
          )}
        </div>
      </nav>
    );
  }
}

export default MobileNavBar;
