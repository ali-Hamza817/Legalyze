try {
    console.log('Loading generate route...');
    require('./routes/generate');
    console.log('Generate route loaded successfully');
} catch (error) {
    console.error('Error loading generate route:', error);
}
