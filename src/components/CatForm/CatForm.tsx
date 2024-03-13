import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Panel,
    Button,
    Textarea,
    Text,
    FormItem
  } from '@vkontakte/vkui';
  import '@vkontakte/vkui/dist/vkui.css';
  import { FactsService } from '../../API/Facts/FactsService';
  import { Fact } from '../../types/Fact';
  import './CatForm.css';

export const CatForm = () => {

    const [data, setData] = useState<Fact>({fact:'',length:0});
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textareaRef.current) {
            const spaceIndex = textareaRef.current.value.indexOf(' ');
            textareaRef.current.setSelectionRange(spaceIndex, spaceIndex);
            textareaRef.current.focus();
        }
    }, [data]);

    async function fetchFact(){
        const response = await FactsService.getFact();
        setData(response);
    }

    return (
        <div className='cat-form-container'>
            <View activePanel="panel">
                <Panel id="panel">
                    <Text>Get a fact about cats</Text>
                    <FormItem>
                        <Textarea getRef={textareaRef} value={data.fact} />
                    </FormItem>
                    <FormItem>
                        <Button onClick={fetchFact}>Get Fact</Button>
                    </FormItem>
                </Panel>
            </View>
            </div>
    );
};

export default CatForm;