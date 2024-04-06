import React, { useRef, useState } from 'react';
import ModalSheet, { ModalSheetProps } from '../../components/Modal';
import { View } from 'react-native';
import { Input } from '../Input';
import { Card, CardTitle } from './styles';
import VerifiedIcon from 'react-native-vector-icons/AntDesign';

interface SelectProps {
   title: string;
   placeholder: string;
   data: string[];
   onSelect: (item: any) => void;
   selected?: string;
}

const Select: React.FC<SelectProps> = ({
   title,
   placeholder,
   data,
   onSelect,
   selected,
}) => {
   if (!data.length) {
      return null;
   }
   const addModalRef = useRef<ModalSheetProps>(null);
   const [selectedData, setSelectedData] = useState(selected);

   return (
      <View>
         <Input
            title={title}
            value={selectedData}
            placeholder={placeholder}
            editable={false}
            onPressIn={() => addModalRef.current?.open()}
         />
         <ModalSheet maxHeigth title={title} ref={addModalRef}>
            {data.map(item => (
               <Card
                  key={item}
                  onPress={() => {
                     setSelectedData(item);
                     onSelect(item);
                     addModalRef.current?.close();
                  }}>
                  <CardTitle>{item}</CardTitle>
                  {item === selectedData ? (
                     <VerifiedIcon
                        name="checkcircleo"
                        color="white"
                        size={24}
                     />
                  ) : null}
               </Card>
            ))}
         </ModalSheet>
      </View>
   );
};

export { Select };
