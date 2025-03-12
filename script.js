document.addEventListener("DOMContentLoaded", function () {
    if (typeof NGL === "undefined") {
        console.error("NGL.js failed to load!");
        return;
    }

    const moleculeViewer = document.getElementById("molecule-viewer");
    const moleculeTitle = document.getElementById("molecule-title");
    const moleculeDescription = document.getElementById("molecule-description");

    // Hide the molecule viewer initially
    moleculeViewer.style.display = "none"; 

    
    // Start NGL stage
    const stage = new NGL.Stage("molecule-viewer");

    function loadMolecule(type) {
        let moleculeFile = "";
        let title = "";
        let description = "";

        switch (type) {
            case "carbohydrate":
                moleculeFile = "https://files.rcsb.org/download/8WLB.pdb";
                title = "Carbohydrates";
                description = "Exist in ring or linear forms, with glycosidic linkages connecting monosaccharides. Their stereochemistry affects function.";
                break;
            case "lipid":
                moleculeFile = "https://files.rcsb.org/download/1O7Q.pdb";
                title = "Lipids";
                description = "Form bilayers, micelles, or vesicles, with hydrophobic tails and hydrophilic heads, critical for membrane structure.";
                break;
            case "nucleic_acid":
                moleculeFile = "https://files.rcsb.org/download/6M0J.pdb";
                title = "Nucleic Acids";
                description = "DNA adopts a double-helix, while RNA forms varied structures (loops, stems) depending on function. Base pairing (A-T/U, G-C) is essential for stability.";
                break;
            case "protein":
                moleculeFile = "https://files.rcsb.org/download/2GTB.pdb";
                title = "Proteins";
                description = "Fold into complex structures (primary, secondary, tertiary, quaternary), stabilized by hydrogen bonds, ionic interactions, and hydrophobic forces.";
                break;
            default:
                title = "Select a Biomolecule";
                description = "Click a button to learn about the biomolecule.";
                return;
        }

        // Show the molecule viewer when a molecule is selected
        moleculeViewer.style.display = "block";

        // Update UI
        moleculeTitle.textContent = title;
        moleculeDescription.textContent = description;

        // Clear previous molecule before loading a new one
        stage.removeAllComponents();

        // Load the new molecule
        stage.loadFile(moleculeFile, { defaultRepresentation: true })
            .then(function (component) {
                component.autoView();
            })
            .catch(error => {
                console.error("Failed to load molecule:", error);
            });

        // Resize WebGL canvas after loading
        setTimeout(() => {
            stage.handleResize();
        }, 500);
    }

    // Attach event listeners for buttons
    document.getElementById("carbohydrate-btn").addEventListener("click", function () {
        loadMolecule("carbohydrate");
    });

    document.getElementById("lipid-btn").addEventListener("click", function () {
        loadMolecule("lipid");
    });

    document.getElementById("nucleic-acid-btn").addEventListener("click", function () {
        loadMolecule("nucleic_acid");
    });
}); 
    document.getElement
