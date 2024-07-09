import React from 'react'
import usePerfectScrollbar from '../../hooks/usePerfectScrollbar';

export const PerfectScrollbarPage = () => {
    usePerfectScrollbar('vertical-example');
    usePerfectScrollbar('horizontal-example');
    usePerfectScrollbar('both-scrollbars-example');
}
