import { AppRegistry } from 'react-native';
// 基本用法
import BasicApp from './src/components/App';
// FlatList的基本用法
import FlatListDemo from './src/components/list/FlatListDemo'
// SectionList 基本用法
import SectionListDemo from './src/components/list/SectionListDemo'

// 加载网上的movie data 列表
import MovieListDemo from './src/components/list/MovieListDemo'

// 导航
import NavigationApp from './src/navigator/App';

// 电影列表
import MovieHome from './src/movielist/MovieHome';

import App from './src/App';

AppRegistry.registerComponent('second_project', () => App);
