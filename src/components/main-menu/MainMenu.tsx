import { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Link } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import { useAuth } from '../../contexts/AuthContext';

export default function MainMenu() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { handleRefreshAuth } = useAuth();

    return (
        <Box component='aside' sx={{ maxWidth: '20rem' }}>
            {/* List needs aria label? */}
            <List component="nav"> 
                <Link href='/dashboard'>
                    <ListItemButton selected={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <Link href='/drivers'>
                    <ListItemButton selected={selectedIndex === 1} onClick={() => setSelectedIndex(1)}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </Link>
                <button onClick={handleRefreshAuth}>Refresh auth</button>
            </List>
        </Box>
    );
}
