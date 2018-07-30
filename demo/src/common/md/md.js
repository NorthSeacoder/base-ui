/**
 * @author KylesLight
 * @date 28/02/2018-7:33 PM
 * @file md
 */

import IntroOverview from './intro-overview.md';
import IntroConcepts from './intro-concepts.md';

import CompDate from './comp/date.md';
import CompDateString from './comp/date-string.md';
import CompForm from './comp/form.md';
import CompImage from './comp/image.md';

import {genMdTextMap} from './helper';

export default {
    IntroOverview,
    IntroConcepts,

    ...genMdTextMap(CompDate, 'CompDate'),
    ...genMdTextMap(CompDateString, 'CompDateString'),
    ...genMdTextMap(CompForm, 'CompForm'),
    ...genMdTextMap(CompImage, 'CompImage')
};
