import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Panel,
    Button,
    Textarea
  } from '@vkontakte/vkui';
  import '@vkontakte/vkui/dist/vkui.css';
  import { FactsService } from '../../API/Facts/FactsService';
  import { Fact } from '../../types/Fact';
import './MainPage.css';

export const MainPage = () => {

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
        <div className="main-page">
            <View activePanel="panel">
                <Panel id="panel">
                    <Button onClick={fetchFact}>Get Fact</Button>
                    <Textarea getRef={textareaRef} value={data.fact} />
                </Panel>
            </View>
        </div>
    );
};
