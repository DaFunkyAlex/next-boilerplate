import React, {Component} from 'react';
import {connect} from 'react-redux';
import AnimateHeight from 'react-animate-height';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getNavigation} from '../../store';
import styler from '../../helpers/styler';
import {bindActionCreators} from 'redux';
import '../../helpers/icons';

class Navigation extends Component {

    state = {
        menu: null
    };

    componentDidMount() {
        this.setState({menu: this.props.menu});
    }

    /**
     * add or remove 'open' class to/from parentNode
     *
     * @param event
     * @param index
     */
    toggleClass = (event, index) => {

        const target = event.currentTarget;
        const open = (target.parentNode.classList.contains(styler(['open'])));
        const menu = {...this.state.menu};

        // remove the "open" class from any menu item
        target.parentNode.parentNode.childNodes.forEach((node) => {
            if (node.classList.contains(styler(['open']))) {
                node.classList.remove(styler(['open']));
            }
        });

        // collapse any menu item
        for (let item in menu) {
            if (menu[item].hasOwnProperty('submenu')) {
                menu[item].submenuOpened = false;
            }
        }



        // open or close submenu
        if (!open) {
            target.parentNode.classList.add(styler(['open']));
            menu[index].submenuOpened = true;

        } else {
            target.parentNode.classList.remove(styler(['open']));
            menu[index].submenuOpened = false;

        }

        // overwrite menu state
        this.setState({
            menu: menu
        })

    };


    /**
     * render method
     *
     * @returns {*}
     */
    render() {

        const menu = this.props.menu.map((item, index) => {
            return (
                <li key={index}>
                    {(item.hasOwnProperty('link')) ? (
                        <Link href={item.link}>
                            <a><FontAwesomeIcon icon={item.icon} className={styler(['icon'])}/>{item.label}</a>
                        </Link>
                    ) : (

                        <>
                            <a onClick={(event) => {
                                this.toggleClass(event, index);
                            }}>
                                <FontAwesomeIcon icon={item.icon} className={styler(['icon'])}/>
                                <span>{item.label}</span>
                                <FontAwesomeIcon icon={"chevron-right"} className={styler(['icon', 'arrow'])}/>
                            </a>
                            <AnimateHeight duration={500} height={item.submenuOpened ? 'auto' : 0}>
                                <ul className={styler(['sub-menu'])}>
                                    {item.submenu.map((subitem, index) => {
                                        return <li key={index}><Link href={subitem.link}><a>{subitem.label}</a></Link></li>
                                    })}
                                </ul>
                            </AnimateHeight>
                        </>
                    )}
                </li>
            )
        });

        return (
            <aside className={styler(['menu'])}>
                <div className={styler(['brand'])}>React Boilerplate</div>
                <nav>
                    <ul className={styler(['nav-menu'])}>
                        {menu}
                    </ul>
                </nav>
            </aside>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        menu: state.items,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNavigation: bindActionCreators(getNavigation, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)