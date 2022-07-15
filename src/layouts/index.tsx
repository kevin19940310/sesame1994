import React, {useCallback, useEffect, useRef, useState} from 'react';
import { Outlet } from 'umi';
import routers from '../../config/config.router';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router';

import Nav from '@/component/Nav';

import styles from './index.less';

export default function Layout() {
    const { pathname  } = useLocation();
    const animatedTag = useRef();
    const animatedMode = useRef('forward');

    const mapRouter = useCallback((routerList: Record<string, any>[]) => {
        for (let i = 0; i < routerList.length; i++) {
            if(routerList[i].path === pathname) {
                return routerList[i].animatedTag
            }
            if(routerList[i].routes) {
                mapRouter(routerList[i].routes);
            }
        }
    }, [routers, pathname])

    const data = mapRouter(routers);
    if(animatedTag.current && animatedTag.current > data) {
        animatedMode.current = 'back'
    } else {
        animatedMode.current = 'forward'
    }
    animatedTag.current = data;

    return (
        <div className={styles.layout}>
          <div className={styles.content}>
              <TransitionGroup>
                  <CSSTransition
                    key={pathname}
                    timeout={300}
                    classNames={animatedMode.current}
                  >
                      <Outlet />
                  </CSSTransition>
              </TransitionGroup>
              <Nav/>
              <div className={styles.vague}/>
          </div>
        </div>
  );
}
