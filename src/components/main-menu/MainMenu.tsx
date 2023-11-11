import { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function MainMenu() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Box component='aside' sx={{ maxWidth: '20rem' }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton selected={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItemButton>

                <ListItemButton selected={selectedIndex === 1} onClick={() => setSelectedIndex(1)}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
            </List>
        </Box>
    );
}
