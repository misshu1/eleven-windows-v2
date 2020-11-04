import fantasy_world_preview from 'assets/images/videoPreview/fantasy_world.jpg';
import illidan_stormrage_preview from 'assets/images/videoPreview/illidan_stormrage.jpg';
import wistful_by_omario_preview from 'assets/images/videoPreview/wistful_by_omario.jpg';
import fantasy_world_mp4 from 'assets/videos/fantasy_world.mp4';
import fantasy_world_webm from 'assets/videos/fantasy_world.webm';
import illidan_stormrage_mp4 from 'assets/videos/illidan_stormrage.mp4';
import illidan_stormrage_webm from 'assets/videos/illidan_stormrage.webm';
import wistful_by_omario_mp4 from 'assets/videos/wistful_by_omario.mp4';
import wistful_by_omario_webm from 'assets/videos/wistful_by_omario.webm';

export const videoBackgrounds = [
    {
        id: 'vid1',
        name: 'Illidan Stormrage',
        isSelected: true,
        video: {
            webm: illidan_stormrage_webm,
            mp4: illidan_stormrage_mp4
        },
        preview: illidan_stormrage_preview
    },
    {
        id: 'vid2',
        name: 'Fantasy World',
        isSelected: false,
        video: {
            webm: fantasy_world_webm,
            mp4: fantasy_world_mp4
        },
        preview: fantasy_world_preview
    },
    {
        id: 'vid3',
        name: 'Wistful by Omario',
        isSelected: false,
        video: {
            webm: wistful_by_omario_webm,
            mp4: wistful_by_omario_mp4
        },
        preview: wistful_by_omario_preview
    }
];
