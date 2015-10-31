
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.io.IOException;
import javax.swing.JFrame;
import javax.swing.JTextField;
import java.nio.file.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DJ {

    public static void main(String[] argv) throws Exception {

        JTextField textField = new JTextField();

        Utils u = new Utils("../servidor/web/dj.txt");

        textField.addKeyListener(new Keychecker(u));
        textField.addMouseListener(new Mousechecker(u));

        JFrame jframe = new JFrame();

        jframe.add(textField);

        jframe.setSize(400, 350);

        jframe.setVisible(true);

        System.out.println("VERSION 2");

    }
}

class Mousechecker extends MouseAdapter {

    Utils u;
    public Mousechecker(Utils u)
    {
        this.u = u;
    }
    @Override
    public void mousePressed(MouseEvent event) {
        u.guardar("6");
    }
}

class Keychecker extends KeyAdapter {

    Utils u;
    
    public Keychecker(Utils u)
    {
        this.u = u;
    }
    
    @Override
    public void keyPressed(KeyEvent event) {
        switch (event.getKeyCode()) {
            case KeyEvent.VK_UP:
                u.guardar("1");
                break;
            case KeyEvent.VK_DOWN:
                u.guardar("2");
                break;
            case KeyEvent.VK_LEFT:
                u.guardar("3");
                break;
            case KeyEvent.VK_RIGHT:
                u.guardar("4");
                break;
            case 32:
                u.guardar("5");
            default:
                System.out.println((int) event.getKeyCode());
        }
    }
}

class Utils {

    String ruta;

    public void guardar(String dato) {
        try {
            Files.write(Paths.get(ruta), dato.getBytes());
        } catch (IOException ex) {
            Logger.getLogger(Keychecker.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Utils(String ruta) {
        this.ruta = ruta;
    }
}
