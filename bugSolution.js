To fix this, ensure that the `keyExtractor` function always provides unique keys. A common approach is using the `uuid` library to generate unique identifiers.  Here's how to resolve the issue using the `uuid` library:

```javascript
import {FlatList, Text} from 'react-native';
import uuid from 'react-native-uuid'; // Install: npm install react-native-uuid

const data = [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}];

const uniqueData = data.map(item => ({...item, id: uuid.v4()}));

<FlatList
  data={uniqueData}
  keyExtractor={(item) => item.id}
  renderItem={({item}) => <Text>{item.name}</Text>}
/>
```

This solution uses `uuid.v4()` to generate a universally unique identifier for each item, thus guaranteeing that the keys will always be unique, which fixes the rendering issues.  If you don't want to add extra dependency you could generate unique ids in your data source before passing it to FlatList.